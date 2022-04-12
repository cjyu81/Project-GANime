import os
import re
from typing import List, Optional

import numpy as np
import PIL.Image
import torch
import pickle

if __name__ == '__main__':
    from stylegan2_ada_pytorch import *
else:
    from .stylegan2_ada_pytorch import *




def stylegan(
    # ctx: click.Context,
    network_pkl: str,
    seeds: Optional[List[int]],
    truncation_psi: float,
    # noise_mode: str,
    # outdir: str,
    # class_idx: Optional[int],
):
    class_idx = None
    noise_mode = 'const'

    print('Loading networks from "%s"...' % network_pkl)
    
    dir = os.path.dirname(__file__)
    filepath = os.path.join(dir, network_pkl)

    with open(filepath, 'rb') as f:
        G = pickle.load(f)['G_ema']

    if seeds is None:
        print('--seeds option is required when not using --projected-w')
        return

    # Labels.
    label = torch.zeros([1, G.c_dim])
    if G.c_dim != 0:
        if class_idx is None:
            print('Must specify class label with --class when using a conditional network')
            return
        label[:, class_idx] = 1
    else:
        if class_idx is not None:
            print ('warn: --class=lbl ignored when running on an unconditional network')


    print('Generating image for seed %d (%d/%d) ...' % (seeds, 1, 1))
    z = torch.from_numpy(np.random.RandomState(seeds).randn(1, G.z_dim))
    G = G.float()
    img = G(z, label, truncation_psi=truncation_psi, noise_mode=noise_mode, force_fp32=True)
    img = (img.permute(0, 2, 3, 1) * 127.5 + 128).clamp(0, 255).to(torch.uint8)
    return PIL.Image.fromarray(img[0].cpu().numpy(), 'RGB')
